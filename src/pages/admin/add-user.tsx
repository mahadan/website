import { Box } from "@mui/material";
import { Form } from "@rng-associates/forms";
import { BaseUserSchema, useCreateManualUser } from "api/User";
import "react-advanced-cropper/dist/style.css";

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
          email: "fakeuser@email.com",
          district: undefined,
          rotaract: {
            clubName: "",
          },
          photoUrl: "",
          role: "Coordinator",
          rolePriority: undefined,
        }}
        uiSchema={[
          {
            type: "text",
            name: "rolePriority",
            label: "Role Priority",
            gridProps: { md: 4 },
          },
          {
            type: "text",
            name: "role",
            label: "Role",
            gridProps: { md: 4 },
          },
          {
            type: "text",
            name: "fullName",
            helperText: "Please donot add Rtr. / Rtn.",
            label: "Full Name",
            gridProps: { md: 4 },
          },

          {
            type: "text",
            name: "rotaract.clubName",
            label: "Rotaract Club Name",
            gridProps: { md: 4 },
          },

          {
            type: "text",
            name: "district",
            label: "District",
            gridProps: { md: 4 },
          },
          {
            type: "text",
            name: "email",
            label: "Email",
            gridProps: { md: 4 },
          },
          {
            type: "image-signle",
            name: "photoUrl",
            label: "Profile Photo",
            gridProps: { md: 6 },
            outputConstraints: { aspectRatio: 1 },
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
