import { Avatar, Box, Button, Card, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { BaseUserWithID, useDeleteUser, useGetAllUsers } from "api/User";

const SmallUserCard: React.FC<BaseUserWithID> = (user) => {
  const { mutate } = useDeleteUser();
  return (
    <Card
      sx={{
        display: "grid",
        gap: 2,
        gridTemplateColumns: "max(48px, 25%) 75%",
        p: 2,
        boxShadow: 2,
        background: "#f5f5f5",
      }}
    >
      <Box sx={{ width: "100%", aspectRatio: "1/1" }}>
        <Avatar
          sx={{ width: "100%", height: "100%" }}
          src={user.photoUrl || "/mark_black.png"}
          alt={(user.fullName && user.fullName[0]) || ""}
        />
      </Box>
      <Stack>
        <Typography variant="h6">{user.fullName}</Typography>
        <Box>
          {user.rotaract?.clubName} ({user.district})
        </Box>
        <Box>{user.mobile}</Box>
        <Box>{user.email}</Box>
        <Box>
          {user.role} ({user.rolePriority})
        </Box>
        <Box>
          <Button
            onClick={async () => {
              try {
                await mutate(user.id);
              } catch (err) {
                //@ts-expect-error
                console.error(err?.message);
              }
            }}
          >
            Delete User
          </Button>
        </Box>
      </Stack>
    </Card>
  );
};

const DisplayData = () => {
  const { data, status } = useGetAllUsers();
  if (status === "success" && data.length > 0) {
    return (
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: ["1fr", "1fr, 1fr", "1fr 1fr 1fr"],
          gap: 2,
        }}
      >
        {(data as BaseUserWithID[])
          .filter((val) => val.email !== "teammahadan@gmail.com")
          .map((user) => {
            return <SmallUserCard key={user.id} {...user} />;
          })}
      </Box>
    );
  }
  return null;
};

export default function AdminPage() {
  return <DisplayData />;
}
