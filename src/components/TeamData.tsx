import { Avatar, Box, Card, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { BaseUserWithID, useGetAllUsers } from "api/User";

const SmallUserCard: React.FC<BaseUserWithID> = (user) => {
  return (
    <Card
      sx={{
        flexDirection: "column",
        display: "flex",
        gap: 2,
        p: 4,
        boxShadow: 5,
        alignItems: "center",
        textAlign: "center",
        borderRadius: 4,
      }}
    >
      <Box sx={{ width: "100%", aspectRatio: "1/1", maxWidth: "150px" }}>
        <Avatar
          sx={{ width: "100%", height: "100%" }}
          src={user.photoUrl || "/mark_black.png"}
          alt={(user.fullName && user.fullName[0]) || ""}
        />
      </Box>
      <Stack>
        <Typography variant="h5" fontWeight={900}>
          {user.fullName}
        </Typography>
        <Typography variant="h6" fontWeight={900}>
          {user.role}
        </Typography>
        <Typography variant="h6">RAC {user.rotaract?.clubName}</Typography>
        <Typography variant="h6">R.I.D. {user.district}</Typography>
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
          gap: 4,
          my: 4,
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

export default DisplayData;
