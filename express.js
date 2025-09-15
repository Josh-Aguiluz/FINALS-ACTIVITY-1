import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 5000;

// --- MIDDLEWARE ---
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// --- MULTER CONFIG ---
const storage = multer.diskStorage({
    destination: (req, file, callback) => callback(null, 'uploads/'),
    filename: (req, file, callback) => callback(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage: storage });

// --- IN-MEMORY DATABASE ---
let users = [];
let students = [];
let admins = [];
let nextId = 1;

// ---- API ROUTES ----

// == USER ROUTES ==
app.get('/api/users', (req, res) => {
    res.json(users);
});

app.post('/api/user', (req, res) => {
    const newUser = { id: nextId++, ...req.body };
    users.push(newUser);
    console.log("New User Added:", newUser);
    res.status(201).json(newUser);
});

app.put('/api/user/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === userId);
    if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...req.body };
        console.log("User Updated:", users[userIndex]);
        res.json(users[userIndex]);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

app.delete('/api/user/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    users = users.filter(u => u.id !== userId);
    console.log("Deleted User with ID:", userId);
    res.status(204).send();
});


// == STUDENT ROUTES ==
app.get('/api/students', (req, res) => res.json(students));

app.post('/api/student', (req, res) => {
    const newStudent = { id: nextId++, ...req.body };
    students.push(newStudent);
    console.log("New Student Added:", newStudent);
    res.status(201).json(newStudent);
});

// THIS IS THE NEWLY ADDED ROUTE FOR STUDENTS
app.put('/api/student/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const studentIndex = students.findIndex(s => s.id === studentId);
    if (studentIndex !== -1) {
        students[studentIndex] = { ...students[studentIndex], ...req.body };
        console.log("Student Updated:", students[studentIndex]);
        res.json(students[studentIndex]);
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
});

app.delete('/api/student/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    students = students.filter(s => s.id !== studentId);
    console.log("Deleted Student with ID:", studentId);
    res.status(204).send();
});


// == ADMIN ROUTES ==
app.get('/api/admins', (req, res) => res.json(admins));

app.post('/api/admin', upload.single('file'), (req, res) => {
    const newAdmin = {
        id: nextId++,
        ...req.body,
        filePath: req.file ? `/uploads/${req.file.filename}` : 'No file uploaded',
    };
    admins.push(newAdmin);
    console.log("New Admin Added:", newAdmin);
    res.status(201).json(newAdmin);
});

// THIS IS THE NEWLY ADDED ROUTE FOR ADMINS
app.put('/api/admin/:id', (req, res) => {
    const adminId = parseInt(req.params.id);
    const adminIndex = admins.findIndex(a => a.id === adminId);
    if (adminIndex !== -1) {
        admins[adminIndex] = { ...admins[adminIndex], ...req.body };
        console.log("Admin Updated:", admins[adminIndex]);
        res.json(admins[adminIndex]);
    } else {
        res.status(404).json({ message: 'Admin not found' });
    }
});

app.delete('/api/admin/:id', (req, res) => {
    const adminId = parseInt(req.params.id);
    admins = admins.filter(a => a.id !== adminId);
    console.log("Deleted Admin with ID:", adminId);
    res.status(204).send();
});


// ---- VUE APP SERVING ----
app.use(express.static(path.join(__dirname, 'client/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});

// ---- START SERVER ----
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});