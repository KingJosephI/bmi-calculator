import Card from "@/components/Card/Card";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <Image
          src="/assets/images/logo.svg"
          width={100}
          height={100}
          alt="Logo"
        />
      </header>

      <main>
        <section className="hero">
          <h1>Body Mass Index Calculator</h1>
          <p>
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>

          <form>
            Enter your details below Metric Imperial Height Weight Your BMI
            is...
            {/* <!-- add score --> */}
            Your BMI suggests you're{/* <!-- add classification -->.  */}
            Your ideal weight is between {/* <!-- add range -->. */}
          </form>
        </section>

        <section className="bmi-result">
          <div>
            <h2>What your BMI result means</h2>

            <p>
              A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
              Maintaining a healthy weight may lower your chances of
              experiencing health issues later on, such as obesity and type 2
              diabetes. Aim for a nutritious diet with reduced fat and sugar
              content, incorporating ample fruits and vegetables. Additionally,
              strive for regular physical activity, ideally about 30 minutes
              daily for five days a week.
            </p>
          </div>
        </section>

        <section className="benefits">
          <div>
            <h2>Healthy Eating</h2>
            <p>
              Healthy eating promotes weight control, disease prevention, better
              digestion, immunity, mental clarity, and mood.
            </p>
          </div>
          <div>
            <h2>Regular exercise</h2>
            <p>
              Exercise improves fitness, aids weight control, elevates mood, and
              reduces disease risk, fostering wellness and longevity.
            </p>
          </div>

          <div>
            <h2>Adequate sleep</h2>
            <p>
              Sleep enhances mental clarity, emotional stability, and physical
              wellness, promoting overall restoration and rejuvenation.
            </p>
          </div>
        </section>

        <section className="limitations px-7 pb-24 md:px-10 lg:px-36 ">
          <h2 className="section-title text-[#253347] text-[2rem] font-semibold text-center">
            Limitations of BMI
          </h2>
          <p className="section-description text-[#5E6E85] pt-8 pb-14 text-center">
            Although BMI is often a practical indicator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI outcomes, and in certain cases, the measurement
            may not be beneficial to use.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Card
              icon="/assets/images/icon-gender.svg"
              title="Gender"
              description="The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."
            />
            <Card
              icon="/assets/images/icon-age.svg"
              title="Age"
              description="In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."
            />

            <Card
              icon="/assets/images/icon-muscle.svg"
              title="Muscle"
              description="BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."
            />
            <Card
              icon="/assets/images/icon-pregnancy.svg"
              title="Pregnancy"
              description="  Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."
            />

            <Card
              icon="/assets/images/icon-race.svg"
              title="Race"
              description="Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."
            />
          </div>
        </section>
      </main>
    </>
  );
}
