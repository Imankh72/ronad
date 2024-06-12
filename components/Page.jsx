import Head from "next/head";
import { render } from "react-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import QRFooter from "./QRFooter";

const Page = ({isSignUp, title, children, sticky, setSticky, content, isQR }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={content ? content : "با پیشرفت تجارت الکترونیک در کشـور و نیازمنـدی به خدمـات زنجیره لجستیک، روناد با استفاده از تخصص و علم روز دنـیا در کنار کسب و کارها و فروشگاه های اینترنتی ایستاده است. ما افتخار می‌کنیم با در اختیار داشتن یکی تخصصی‌ترین مراکز پردازش در سراسر ایران، سفارشات شما را در سریع‌ترین زمان و با بهینه‌ترین هزینه به دست خریداران می رسانیم."
}
        />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
        {!isQR &&
      <header>
        <Navbar sticky={sticky} setSticky={setSticky} />
      </header>
    }
      <main className="main-size">{children}</main>
      {!isSignUp &&
      <footer>
      { isQR && 
        <QRFooter/>
      }
      { !isQR && 
        <Footer/>
      }
      </footer>
    }
    </>
  );
};

export default Page;
