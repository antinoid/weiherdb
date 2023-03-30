import React, { ChangeEvent, FormEvent, FormEventHandler } from "react";
import { ActionArgs, ActionFunction } from "@remix-run/node";
import { makeDomainFunction } from "domain-functions";
import { useState } from "react";
import { useActionData } from "react-router";
import { z } from "zod";
import Form from "~/components/elements/form/form";
import { formAction } from "~/form-action.server";
import format from "date-fns/format";
// import { createFeeding } from "~/models/feeding.server";

export const action = async ({ request }: ActionArgs) =>
  formAction({
    request,
    schema: createFeedingSchema,
    mutation,
    // successPath: "/success",
  });

const createFeedingSchema = z.object({
  amount: z.number().positive(),
  foodType: z.enum(["small", "medium", "large"]), // name / displayName
  basinId: z.number(),
  date: z.date().default(new Date()),
  userId: z.number(),
});

const mutation = makeDomainFunction(createFeedingSchema)((values) => {
  return values;
});

export default function Feeding() {
  const data = useActionData();
  // const [foodSize, setFoodSize] = useState("medium");
  const [formData, setFormData] = useState({
    amount: 0,
    foodType: "medium",
    basinId: 1,
    date: format(new Date(), "yyyy-MM-dd"),
    userId: 0,
  });

  function handleChange(
    e:
      | FormEvent<HTMLInputElement>
      | FormEvent<HTMLSelectElement>
      | FormEvent<HTMLDivElement>
  ) {
    let evt = e as ChangeEvent<HTMLInputElement>;

    setFormData({
      ...formData,
      [evt.target.name]:
        evt.target.inputMode === "numeric"
          ? evt.target.value.replace(/\D/g, "")
          : evt.target.value,
    });
    console.log("formData2: " + JSON.stringify(formData));
  }

  // function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
  //   setFoodSize(e.target.value);
  // }

  return (
    <div className="w-3/4 mx-auto">
      Feeding
      <Form schema={createFeedingSchema} className="flex">
        {({ Field, Errors, Button }) => (
          <>
            <Field name="amount" inputMode="numeric">
              {({ Label, Input, Errors }) => (
                <>
                  <Label>Menge</Label>
                  <Input className="rounded-r-none" onChange={handleChange} />
                  <Errors />
                </>
              )}
            </Field>
            <Field name="foodType" value={formData.foodType}>
              {({ Label, Select, Errors }) => (
                <>
                  <Label>&nbsp;</Label>
                  <Select onChange={handleChange} className="rounded-l-none" />

                  <Errors />
                </>
              )}
            </Field>
            <Field
              name="basinId"
              label="Becken"
              onChange={handleChange}
              value={formData.basinId}
            />
            <Field
              name="date"
              label="Datum"
              onChange={handleChange}
              value={formData.date}
            />
            <Field
              name="userId"
              label="User"
              onChange={handleChange}
              value={formData.userId}
            />
            <Errors />
            <div className="flex items-center space-x-4">
              <Button />
            </div>
          </>
        )}
      </Form>
    </div>
  );
}
