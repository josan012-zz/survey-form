import Pagina1 from "./styled";
import react from "react";
import { useFormData } from "../functii/functii";
import Button from "@mui/material/Button";
import { useForm, useFormContext, FormProvider } from "react-hook-form";

const PageTwo = () => {
  const { completeFormStep } = useFormData();
  const { watch, formState, getValues, register } = useForm();

  return (
    <Pagina1>
      <div className="final">
        <div className="center">
          <div className="background">
            <div className="text">
              <div className="center">
                <p id="title2">freeCodeCamp Survey Form</p>
              </div>
            </div>
            <div className="albastru">
              <form>
                <div className="center">
                  <div className="input-email">
                    <label htmlFor="nume">E-mail address</label>
                    <input
                      type="text"
                      id="nume"
                      placeholder="enter your e-mail address"
                      {...register("email")}
                    />
                  </div>
                </div>
                <div className="center">
                  {/* <a href="#title3"> */}
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
        {/* <div className="center">
          <div className="trecere"></div>
        </div> */}
      </div>
    </Pagina1>
  );
};

export default PageTwo;
