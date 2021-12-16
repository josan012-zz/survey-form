import Pagina1 from "./styled";
import react from "react";
import { useFormData } from "../functii/functii";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";

const onSubmit = (data: any) => {
  console.log(data);
};

const PageSix = () => {
  const { completeFormStep } = useFormData();
  const { watch, register, formState, handleSubmit } = useForm();
  return (
    <Pagina1>
      <div className="final">
        <div className="center">
          <div className="background">
            <div className="text">
              <div className="center">
                <p id="title6">freeCodeCamp Survey Form</p>
              </div>
            </div>
            <div className="albastru">
              <form onSubmit={handleSubmit(onSubmit)}>
                <p id="comm">Are you any comments or suggestions?</p>
                <textarea
                  id="comentarii"
                  placeholder="Enter your comments here ..."
                  {...register("comment")}
                ></textarea>
                <div className="center">
                  <Button
                    className="buton"
                    type="submit"
                    onClick={completeFormStep}
                    form="survey-form"
                  >
                    Submit
                  </Button>
                  <pre>{JSON.stringify(watch(), null, 2)}</pre>
                </div>
              </form>
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

export default PageSix;
