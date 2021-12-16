import Pagina1 from "./styled";
import { useForm, useFormContext, FormProvider } from "react-hook-form";
import react from "react";
import { useFormData } from "../functii/functii";
import Button from "@mui/material/Button";
import react from "react";

const PageOne = () => {
  const { completeFormStep } = useFormData();
  const { watch, formState, getValues, register } = useForm();

  return (
    <Pagina1>
      <div className="final">
        <div className="center">
          <div className="background">
            <div className="text">
              <div className="center">
                <p id="title1">freeCodeCamp Survey Form</p>
              </div>
            </div>
            <div className="albastru">
              <form>
                <div className="center">
                  <div className="text1">
                    By following a few simple steps you will successfully
                    complete the survey form
                  </div>
                </div>

                <div className="center">
                  <div className="input">
                    <label htmlFor="nume">Name</label>
                    <input
                      type="text"
                      id="nume"
                      placeholder="enter your name"
                      {...register("nume")}
                    />
                  </div>
                </div>
                <div className="center">
                  <div className="input">
                    <label htmlFor="nume">Age (optional)</label>
                    <input
                      type="text"
                      id="varsta"
                      placeholder="enter your age"
                      {...register("varsta")}
                    />
                  </div>
                </div>
                <div className="center">
                  {/* <a href="#title2"> */}
                  <Button
                    className="buton"
                    type="button"
                    onClick={() => {
                      completeFormStep;
                    }}
                  >
                    Next
                  </Button>
                  {/* </a> */}
                </div>
              </form>

              <pre>{JSON.stringify(watch(), null, 2)}</pre>
            </div>
          </div>
        </div>
      </div>
    </Pagina1>
  );
};

export default PageOne;
