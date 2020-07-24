import Layout from "../../components/Layout";
import About from "../../components/About";

function Caleb() {
  return (
    <Layout>
      <About
        name={<a href="https://caleb.biz">Caleb Aviles</a>}
        imageUrl="/biz.png"
        description="Hey, there! My name is Caleb and I'm a Full Stack Software Engineer. I love writing RoR, JavaScript HTML, and CSS."
      />
      
    </Layout>
  );
}

export default Caleb;