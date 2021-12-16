import Pagina1 from "./styled";
import react from "react";
import { useForm } from "react-hook-form";

const PageSeven = () => {
  const { watch } = useForm();
  return (
    <Pagina1>
      <div className="final">
        <div className="center">
          <div className="background">
            <div className="text">
              <div className="center">
                <p id="title7">freeCodeCamp Survey Form</p>
              </div>
            </div>
            <div className="albastru">
              <p id="final">Your message has been sent successfully.</p>
              <p id="multumire">
                We will send our answer and the loyalty bonus to your e-mail
                address . <br />
                Thank you!
              </p>
              <pre>{JSON.stringify(watch(), null, 2)}</pre>
            </div>
          </div>
        </div>
      </div>
    </Pagina1>
  );
};

export default PageSeven;
