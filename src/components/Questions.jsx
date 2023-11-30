const Question = () => {
  return (
    <section>
      <div className="text-lg font-serif container mx-auto  max-w-2xl">
        <h1 className="font-bold text-2xl p-5">Question and answers</h1>
        <div className="max-w-xl pb-2">
          <p className="pb-2">
            ✴️ Is there a limit to the size of the IFC models I can upload?
          </p>
          <p>
            - The ease of handling IFC files in an IFC viewer can depend on the
            computer's processing power and available resources. More powerful
            computers with better CPUs, GPUs, and sufficient RAM will generally
            handle larger and more complex IFC files more easily.
          </p>
          <div>
            <p className="py-2">
              ✴️ Can multiple users collaborate on the same IFC model in
              real-time?
            </p>
            <p>
              - Yes, collaboration is a key feature of our IFC browser. Multiple
              users can simultaneously view and interact with the same IFC model
              in real-time. Collaborative tools are integrated to enhance
              teamwork and communication among project stakeholders.
            </p>
          </div>
          <div>
            <p className="py-2">
              ✴️ What browsers are compatible with your IFC viewer?
            </p>
            <p>
              - Our IFC viewer is compatible with major web browsers, including
              but not limited to Google Chrome, Mozilla Firefox, Microsoft Edge,
              and Safari. We recommend using the latest versions of these
              browsers for the best experience.
            </p>
          </div>
          <div className="max-w-xl pb-2">
            <p className="pb-2">
              ✴️ Is there a mobile version of the IFC browser?
            </p>
            <p>
              - While our primary focus is on providing a robust desktop
              experience, we are actively working on a mobile version to ensure
              accessibility on various devices. Stay tuned for updates on mobile
              compatibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Question;
