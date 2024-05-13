"use client";
import { Agency } from "@prisma/client";
import { FC, useEffect, useState } from "react";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import {zodResolver} from '@hookform/resolvers/zod'
import * as z from 'zod'

interface AgencyDetailsProps {
  data?: Partial<Agency>;
}
const FormSchema = z.object({
  name: z.string().min(2, { message: 'Agency name must be atleast 2 chars.' }),
  companyEmail: z.string().min(1),
  companyPhone: z.string().min(1),
  whiteLabel: z.boolean(),
  address: z.string().min(1),
  city: z.string().min(1),
  zipCode: z.string().min(1),
  state: z.string().min(1),
  country: z.string().min(1),
  agencyLogo: z.string().min(1),
})
const AgencyDetails = ({data}:AgencyDetailsProps) => {
  const toast = useToast();
  const router = useRouter();
    const [deletingAgency, setDeletingAgency] = useState(false);
    const form = useForm<z.infer<typeof FormSchema>>({
    mode: 'onChange',
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: data?.name,
      companyEmail: data?.companyEmail,
      companyPhone: data?.companyPhone,
      whiteLabel: data?.whiteLabel || false,
      address: data?.address,
      city: data?.city,
      zipCode: data?.zipCode,
      state: data?.state,
      country: data?.country,
      agencyLogo: data?.agencyLogo,
    },
  })
    useEffect(() => {
        if (data) {
    form.reset(data)
}},[])
    return (
      
  )
};

export default AgencyDetails;
