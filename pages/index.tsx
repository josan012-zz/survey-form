import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import PageOne from "../components/Pagina1";
import PageTwo from "../components/Pagina2";
import PageThree from "../components/Pagina3";
import PageFour from "../components/Pagina4";
import PageFive from "../components/Pagina5";
import PageSix from "../components/Pagina6";
import PageSeven from "../components/Pagina7";
import react from "react";
import { useFormData } from "../components/functii/functii";
import { useForm, useFormContext } from "react-hook-form";

const Home: NextPage = () => {
  const { formStep, setFormStep, completeFormStep } = useFormData();
  const { watch, handleSubmit, getValues } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} id="survey-form">
        <section> {formStep === 0 && <PageOne />}</section>
        <section> {formStep === 1 && <PageTwo />}</section>
        <section> {formStep === 2 && <PageThree />}</section>
        <section> {formStep === 3 && <PageFour />}</section>
        <section> {formStep === 4 && <PageFive />}</section>
        <section> {formStep === 5 && <PageSix />}</section>
        <section> {formStep === 6 && <PageSeven />}</section>
      </form>
    </div>
  );
};

export default Home;
