document.addEventListener('DOMContentLoaded', function () {
  var containers = document.querySelectorAll('[data-dgw]');
  containers.forEach(function (container) {
    initWidget(container);
  });
});

window.initWidget = initWidget;

function initWidget(container) {
  var targetId = container.id || ('dgw-' + Math.random().toString(36).slice(2, 7));
  if (!container.id) container.id = targetId;

  var workerUrl = container.getAttribute('data-worker') || 'https://demo.kti-degrand.workers.dev';
  var widgetName = container.getAttribute('data-name') || 'degrand.ai';
  var systemPrompt = container.getAttribute('data-prompt') || 'You are a helpful assistant for degrand.ai. Be concise and friendly.';
  var greeting = container.getAttribute('data-greeting') || 'Hey! How can I help you today?';
  var MODEL = 'anthropic/claude-haiku-4-5';

  if (!document.getElementById('dgw-styles')) {
    var style = document.createElement('style');
    style.id = 'dgw-styles';
    style.textContent = '.dgw-root{display:flex!important;flex-direction:column!important;width:100%!important;height:580px!important;border-radius:12px!important;overflow:hidden!important;border:1px solid rgba(255,255,255,0.08)!important;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif!important;background:#0a0a0a!important;box-sizing:border-box!important}.dgw-hdr{background:#111!important;padding:14px 18px!important;display:flex!important;align-items:center!important;gap:12px!important;flex-shrink:0!important;border-bottom:1px solid rgba(255,255,255,0.08)!important}.dgw-av{width:36px!important;height:36px!important;border-radius:50%!important;background:#1a6eff22!important;border:1px solid #1a6eff55!important;display:flex!important;align-items:center!important;justify-content:center!important;font-size:11px!important;color:#1a6eff!important;font-family:monospace!important;font-weight:600!important}.dgw-hname{font-size:14px!important;font-weight:600!important;color:#fff!important;letter-spacing:-0.01em!important}.dgw-hstat{font-size:11.5px!important;color:#666!important;display:flex!important;align-items:center!important;gap:5px!important}.dgw-status-dot{width:6px!important;height:6px!important;border-radius:50%!important;background:#22c55e!important;display:inline-block!important}.dgw-msgs{flex:1!important;overflow-y:auto!important;padding:16px 16px 8px!important;display:flex!important;flex-direction:column!important;gap:10px!important;background:#0a0a0a!important}.dgw-m{max-width:80%!important;display:flex!important;flex-direction:column!important;gap:3px!important}.dgw-m.dgw-bot{align-self:flex-start!important}.dgw-m.dgw-usr{align-self:flex-end!important}.dgw-bbl{padding:10px 14px!important;border-radius:14px!important;font-size:14px!important;line-height:1.55!important}.dgw-m.dgw-bot .dgw-bbl{background:#161616!important;color:#e5e5e5!important;border-bottom-left-radius:3px!important;border:1px solid rgba(255,255,255,0.07)!important}.dgw-m.dgw-usr .dgw-bbl{background:#1a6eff!important;color:#fff!important;border-bottom-right-radius:3px!important}.dgw-mt{font-size:10.5px!important;color:#444!important}.dgw-m.dgw-usr .dgw-mt{text-align:right!important}.dgw-typing{display:flex!important;gap:4px!important;padding:10px 14px!important;align-items:center!important}.dgw-typing span{width:7px!important;height:7px!important;border-radius:50%!important;background:#444!important;animation:dgwbounce 1.2s infinite!important}.dgw-typing span:nth-child(2){animation-delay:.2s!important}.dgw-typing span:nth-child(3){animation-delay:.4s!important}@keyframes dgwbounce{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-6px)}}.dgw-inp-row{border-top:1px solid rgba(255,255,255,0.08)!important;padding:12px 14px!important;display:flex!important;gap:10px!important;flex-shrink:0!important;background:#111!important}.dgw-txt{flex:1!important;border:1px solid rgba(255,255,255,0.1)!important;border-radius:8px!important;padding:10px 14px!important;font-size:14px!important;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif!important;background:#1a1a1a!important;color:#e5e5e5!important;outline:none!important;resize:none!important;line-height:1.45!important;max-height:80px!important;overflow-y:auto!important;box-sizing:border-box!important}.dgw-txt::placeholder{color:#444!important}.dgw-txt:focus{border-color:rgba(26,110,255,0.4)!important;background:#1f1f1f!important}.dgw-send{width:40px!important;height:40px!important;border-radius:8px!important;background:#1a6eff!important;border:none!important;cursor:pointer!important;display:flex!important;align-items:center!important;justify-content:center!important;flex-shrink:0!important;transition:background .15s!important;align-self:flex-end!important}.dgw-send:hover{background:#3b82f6!important}.dgw-send svg{width:16px!important;height:16px!important;fill:#fff!important}';
    document.head.appendChild(style);
  }

  container.className = (container.className + ' dgw-root').trim();
  container.innerHTML = '<div class="dgw-hdr"><div class="dgw-av">AI</div><div><div class="dgw-hname">' + widgetName + '</div><div class="dgw-hstat"><span class="dgw-status-dot"></span>Online now</div></div></div><div class="dgw-msgs" id="' + targetId + '-msgs"><div class="dgw-m dgw-bot"><div class="dgw-bbl">' + greeting + '</div><div class="dgw-mt">now</div></div></div><div class="dgw-inp-row"><textarea class="dgw-txt" id="' + targetId + '-txt" rows="1" placeholder="Ask me anything..."></textarea><button class="dgw-send" id="' + targetId + '-send"><svg viewBox="0 0 24 24"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg></button></div>';

  var history = [];

  function ts() { return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); }

  function addMsg(text, role) {
    var msgs = document.getElementById(targetId + '-msgs');
    var d = document.createElement('div');
    d.className = 'dgw-m ' + (role === 'user' ? 'dgw-usr' : 'dgw-bot');
    d.innerHTML = '<div class="dgw-bbl">' + text + '</div><div class="dgw-mt">' + ts() + '</div>';
    msgs.appendChild(d);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function showTyping() {
    var msgs = document.getElementById(targetId + '-msgs');
    var d = document.createElement('div');
    d.className = 'dgw-m dgw-bot';
    d.id = targetId + '-typ';
    d.innerHTML = '<div class="dgw-bbl" style="padding:0"><div class="dgw-typing"><span></span><span></span><span></span></div></div>';
    msgs.appendChild(d);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function rmTyping() { var t = document.getElementById(targetId + '-typ'); if (t) t.remove(); }

  function sendMsg() {
    var txt = document.getElementById(targetId + '-txt');
    var text = txt.value.trim();
    if (!text) return;
    addMsg(text, 'user');
    txt.value = ''; txt.style.height = 'auto';
    history.push({ role: 'user', content: text });
    showTyping();
    fetch(workerUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: MODEL, max_tokens: 400, messages: [{ role: 'system', content: systemPrompt }].concat(history) })
    })
    .then(function(res) { return res.json(); })
    .then(function(data) {
      var reply = (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) ? data.choices[0].message.content : "Couldn't get a response — try again.";
      rmTyping(); addMsg(reply, 'bot');
      history.push({ role: 'assistant', content: reply });
    })
    .catch(function() { rmTyping(); addMsg('Connection issue — please try again.', 'bot'); });
  }

  document.getElementById(targetId + '-send').addEventListener('click', sendMsg);
  var txt = document.getElementById(targetId + '-txt');
  txt.addEventListener('keydown', function(e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMsg(); } });
  txt.addEventListener('input', function() { txt.style.height = 'auto'; txt.style.height = Math.min(txt.scrollHeight, 80) + 'px'; });
}
