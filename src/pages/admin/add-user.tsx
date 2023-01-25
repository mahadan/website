import { Box } from "@mui/material";
import { Form } from "@rng-associates/forms";
import { BaseUserSchema, useCreateManualUser } from "api/User";
import dynamic from "next/dynamic";
const AdminLayout = dynamic(() => import("components/admin/AdminLayout"));
const AdminWrapper = dynamic(() => import("components/admin/AdminWrapper"));

export default function AdminAddUser() {
  const { mutate } = useCreateManualUser();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Form
        name="add-user-super-admin"
        schema={BaseUserSchema.partial()}
        onSuccess={{ successfulMessage: "User Successfully Created", resetText: "Reset" }}
        initialValues={{
          fullName: "",
          email: "",
          mobile: "",
          district: "",
          rotaract: {
            clubName: "",
          },
        }}
        uiSchema={[
          {
            type: "text",
            name: "fullName",
            helperText: "Please donot add Rtr. / Rtn.",
            label: "Full Name",
            gridProps: { md: 4 },
          },
          {
            type: "text",
            name: "email",
            label: "Email",
            gridProps: { md: 4 },
          },
          {
            type: "text",
            name: "mobile",
            label: "Mobile",
            gridProps: { md: 4 },
          },
          {
            type: "text",
            name: "district",
            label: "Rotary District Number",
            gridProps: { md: 4 },
          },
          {
            type: "text",
            name: "rotaract.clubName",
            label: "Rotaract Club Name",
            gridProps: { md: 4 },
          },
        ]}
        onSubmit={async (data) => {
          try {
            await mutate(data);
            return { error: false };
          } catch (err) {
            return {
              error: true,
              //@ts-expect-error
              errors: [{ message: err?.message || "" }],
            };
          }
        }}
      />
    </Box>
  );
}
