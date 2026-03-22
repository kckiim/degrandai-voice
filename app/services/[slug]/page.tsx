import ServiceDetail from '@/components/ServiceDetail';
import { services } from '@/data/services';

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ServiceDetail slug={slug} />;
}
