import { Form } from "@rng-associates/forms";
import { StatsSchema, useGetStats, useUpdateStats } from "api/Stats";

export default function UpdateStatsForm() {
  const data = useGetStats();
  const { mutate } = useUpdateStats();
  const { camps, districts, units } = data;

  console.log(data);
  return (
    <Form
      name="update stats"
      schema={StatsSchema}
      onSuccess={{ successfulMessage: "Stats Successfully Updated", resetText: "Reset" }}
      initialValues={{ camps: camps, districts, units }}
      uiSchema={[
        {
          type: "text",
          name: "camps",
          label: "Number of Camps",
          gridProps: { md: 4 },
        },
        {
          type: "text",
          name: "units",
          label: "Number of Blood Units Collected",
          gridProps: { md: 4 },
        },
        {
          type: "text",
          name: "districts",
          label: "Number of Districts Involved",
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
  );
}
