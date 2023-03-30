import { makeDomainFunction } from "domain-functions";
import { createForm } from "remix-forms";
import { z } from "zod";
import {
  Form as RemixForm,
  useActionData,
  useSubmit,
  useNavigation,
} from "@remix-run/react";

// export const createFeedingSchema = z.object({
//   amount: z.string(),
// });

// export const createFeedingSchema = z.object({
//   firstName: z.string().min(1),
//   email: z.string().min(1).email(),
// });

// export const createFeeding = makeDomainFunction(schema)(
//   async (values) => values
// );
// export const createFeeding = makeDomainFunction(createFeedingSchema)(
//   async (values) => values
// );
