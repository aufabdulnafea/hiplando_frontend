import Container from "@/components/Container"

export default function Home() {
  return (
    <div className="bg-primary">
      <Container>
        <div className="py-50">
          <div className="w-full max-w-2xl m-auto text-center">
            <h2 className="text-4xl font-bold text-white">Global Equine Sales & Services</h2>
            <p className="text-xl text-white/60">Buy, sell, and manage horses and services worldwide.</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
