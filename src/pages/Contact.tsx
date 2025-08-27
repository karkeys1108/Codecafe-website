import PageTransition from '../components/common/PageTransition';

const Contact = () => {
  return (
    <PageTransition>
      <div id="contact" className="container mx-auto py-40 text-center">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <p className="text-xl text-muted-foreground">
          Have a project in mind? Let's talk about how we can help you.
        </p>
      </div>
    </PageTransition>
  );
};

export default Contact;
