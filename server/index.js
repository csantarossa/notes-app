const express = require("express");
const cors = require("cors");
const notesRouter = require("./routes/notesRouter");
const authRouter = require("./routes/authRouter");
const cookieParser = require("cookie-parser");

// Initialise environment
const PORT = process.env.PORT || 8000;
const app = express();

// Middleware
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

// Routes
app.use("/api/auth", authRouter);
app.use("/api/notes", notesRouter);

app.listen(PORT, () => console.log(`Running on Port ${PORT}...`));
