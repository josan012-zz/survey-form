import Pagina1 from "./styled";
import react from "react";
import { useFormData } from "../functii/functii";
import { useForm } from "react-hook-form";

const PageFour = () => {
  const { completeFormStep } = useFormData();
  const { watch, register, formState } = useForm();
  return (
    <Pagina1>
      <div className="final">
        <div className="center">
          <div className="background">
            <div className="text">
              <div className="center">
                <p id="title4">freeCodeCamp Survey Form</p>
              </div>
            </div>
            <form>
              <div className="albastru">
                <div className="text-radio">
                  Would you recommend freeCodeCamp to a friend?
                </div>
                <input
                  type="radio"
                  id="defenitely"
                  value="Definitely"
                  {...register("alegere")}
                />
                <label htmlFor="alegere"> Definitely</label> <br />
                <input
                  type="radio"
                  {...register("alegere")}
                  id="maybe"
                  value="Maybe"
                />
                <label htmlFor="alegere"> Maybe</label> <br />
                <input
                  type="radio"
                  {...register("alegere")}
                  id="not_sure"
                  value="Not sure"
                />
                <label htmlFor="alegere"> Not sure</label> <br />
              </div>
              <div className="center">
                {/* <a href="#title5"> */}
                <button className="buton" onClick={completeFormStep}>
                  Next
                </button>
                {/* </a> */}
              </div>
            </form>
            <pre>{JSON.stringify(watch(), null, 2)}</pre>
          </div>
        </div>
        {/* <div className="center">
          <div className="trecere"></div>
        </div> */}
      </div>
    </Pagina1>
  );
};

export default PageFour;
