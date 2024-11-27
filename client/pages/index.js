import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="wt-title">Welcome to My Blog</h1>
        {/* other content */}
      </div>
    </Layout>
  );
}

