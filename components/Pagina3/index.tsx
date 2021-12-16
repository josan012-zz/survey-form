import Pagina1 from "./styled";
import react from "react";
import { useForm } from "react-hook-form";
import { useFormData } from "../functii/functii";

const PageThree = () => {
  const { completeFormStep } = useFormData();
  const { watch, register, formState, getValues } = useForm();
  localStorage.setItem("Ocupatie", JSON.stringify(getValues("ocupatie")));
  return (
    <Pagina1>
      <div className="final">
        <div className="center">
          <div className="background">
            <div className="text">
              <div className="center">
                <p id="title3">freeCodeCamp Survey Form</p>
              </div>
            </div>
            <div className="albastru">
              <form>
                <div className="text-select">
                  Which option best describes your current role?
                </div>
                <div className="custom-select">
                  <select className="select" {...register("ocupatie")}>
                    <option value="" disabled selected>
                      Select current role:
                    </option>
                    <option value="Student">Student</option>
                    <option value="Full time job">Full time job</option>
                    <option value="Full time learner">Full time learner</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                    <option value="Other">Other</option>
                  </select>
                  <span className="custom-arrow"></span>
                </div>
                <div className="center">
                  {/* <a href="#title4"> */}
                  <button className="buton" onClick={completeFormStep}>
                    Next
                  </button>
                  {/* </a> */}
                </div>
              </form>
              <pre>{JSON.stringify(watch(), null, 2)}</pre>
            </div>
          </div>
        </div>
        {/* <div className="center">
          <div className="trecere"></div>
        </div> */}
      </div>
    </Pagina1>
  );
};

export default PageThree;
