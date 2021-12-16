import Pagina1 from "./styled";
import react from "react";
import { useFormData } from "../functii/functii";
import { useForm } from "react-hook-form";

const PageFive = () => {
  const { completeFormStep } = useFormData();
  const { watch, register, formState } = useForm();
  return (
    <Pagina1>
      <div className="final">
        <div className="center">
          <div className="background">
            <div className="text">
              <div className="center">
                <p id="title5">freeCodeCamp Survey Form</p>
              </div>
            </div>
            <form>
              <div className="albastru">
                <p id="check">What is your favorite feature of freeCodeCamp?</p>
                <input
                  type="text"
                  id="text-check"
                  placeholder="Select an option"
                  {...register("improve")}
                ></input>
                <p id="check2">
                  What would you like to see improved? (Check all that apply)
                </p>
                <input type="checkbox" id="front" {...register("improve")} />
                <label htmlFor="front">Front-end Projects</label> <br />
                <input type="checkbox" {...register("improve")} id="back" />
                <label htmlFor="back">Back-end Projects</label> <br />
                <input type="checkbox" id="data" {...register("improve")} />
                <label htmlFor="data">Data Visualization</label> <br />
                <input
                  type="checkbox"
                  {...register("improve")}
                  id="challenges"
                />
                <label htmlFor="challenges">Challenges</label> <br />
                <input
                  type="checkbox"
                  id="community"
                  {...register("improve")}
                />
                <label htmlFor="community">Open Source Community</label> <br />
                <input type="checkbox" {...register("improve")} id="help" />
                <label htmlFor="help">Gitter help rooms</label> <br />
                <input type="checkbox" {...register("improve")} id="videos" />
                <label htmlFor="videos">Videos</label> <br />
                <input type="checkbox" {...register("improve")} id="city" />
                <label htmlFor="city">City Meetups</label> <br />
                <input type="checkbox" {...register("improve")} id="wiki" />
                <label htmlFor="wiki">Wiki</label> <br />
                <input type="checkbox" {...register("improve")} id="forum" />
                <label htmlFor="forum">Forum</label> <br />
                <input type="checkbox" {...register("improve")} id="courses" />
                <label htmlFor="courses">Additional Courses</label> <br />
                <input type="checkbox" {...register("improve")} id="comments" />
                <label htmlFor="comments">
                  Any Comments or suggestions
                </label>{" "}
                <br />
                <div className="center">
                  {/* <a href="#title6"> */}
                  <button className="buton" onClick={completeFormStep}>
                    Next
                  </button>
                  {/* </a> */}
                </div>
                <pre>{JSON.stringify(watch(), null, 2)}</pre>
              </div>
            </form>
          </div>
        </div>
        {/* <div className="center">
          <div className="trecere"></div>
        </div> */}
      </div>
    </Pagina1>
  );
};

export default PageFive;
