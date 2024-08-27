const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const FormDataModel = require ('./models/FormData');

const Student = require('./models/StudentData');
const Course = require('./models/CourseData');
const Result = require('./models/ResultData');



const app = express();
app.use(express.json());
app.use(cors());





mongoose.connect('mongodb://127.0.0.1:27017/practice_mern')
       .then(() => console.log('Database connected'))
     .catch(err => console.log(err.message));



app.post('/register', (req, res)=>{
   

    const {email, password} = req.body;
    FormDataModel.findOne({email: email})
    .then(user => {
        if(user){
            res.json("Already registered")
        }
        else{
            FormDataModel.create(req.body)
            .then(log_reg_form => res.json(log_reg_form))
            .catch(err => res.json(err))
        }
    })
    
})


app.post('/login', async (req, res) => {
    const { email, password, designation } = req.body;

    try {
        let user;
        if (designation === 'admin') {
            user = await FormDataModel.findOne({ email });
            if (user && user.password === password) {
                return res.json("Success");
            }
        } else if (designation === 'student') {
            user = await Student.findOne({ email });
            if (user && user.password === password) {
                return res.json("Success");
            }
        }
        res.json("No records found or Wrong password or Choose the Designation");
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



app.post('/addstudent', (req, res) => {
    const { name, fathername, rollno, department, year, semester, email, password, dateofBirth, contact } = req.body;
  
    const newStudent = new Student({
      name,
      fathername,
      rollno,
      department,
      year,
      semester,
      email,
      password,
      dateofBirth,
      contact,
    });
  
    newStudent.save()
      .then(() => res.json('Student Added Successfully'))
      .catch(err => res.status(500).json({ message: err.message }));
  })


  app.get('/viewstudent', (req, res) => {
    Student.find()
        .then(students => res.json(students))
        .catch(err => res.status(500).json({ message: err.message }));
});

app.delete('/deletestudent/:id', (req, res) => {
    const { id } = req.params;
    Student.findByIdAndDelete(id)
        .then(() => res.json('Student Deleted Successfully'))
        .catch(err => res.status(500).json({ message: err.message }));
});

app.get('/viewstudent/:id', (req, res) => {
    const { id } = req.params;
   
    Student.findById(id)
        .then(student => {
            if (!student) {
                return res.status(404).json({ message: 'Student not found' });
            }
            res.json(student);
        })
        .catch(err => res.status(500).json({ message: err.message }));
});



app.put('/editstudent/:id', (req, res) => {
    const { id } = req.params;
    const { name, fathername, rollno, department, year, semester, email, password, dateofBirth, contact } = req.body;

    Student.findByIdAndUpdate(id, {
        name,
        fathername,
        rollno,
        department,
        year,
        semester,
        email,
        password,
        dateofBirth,
        contact
    }, { new: true })
    .then(student => res.json('Student Updated Successfully'))
    .catch(err => res.status(500).json({ message: err.message }));
});







  app.post('/addcourse', (req, res) => {
    const { courseid,coursename,  department, year, semester,  } = req.body;
  
    const newCourse = new Course({
        courseid,
        coursename,
         department,
         year,
         semester,
    });
  
    newCourse.save()
      .then(() => res.json('Course Added Successfully'))
      .catch(err => res.status(500).json({ message: err.message }));
  })


  app.get('/viewcourse', (req, res) => {
    Course.find()
        .then(course => res.json(course))
        .catch(err => res.status(500).json({ message: err.message }));
});


app.delete('/deletecourse/:id', (req, res) => {
    const { id } = req.params;
    Course.findByIdAndDelete(id)
        .then(() => res.json('Course Deleted Successfully'))
        .catch(err => res.status(500).json({ message: err.message }));
});

app.get('/viewcourse/:id', (req, res) => {
    const { id } = req.params;
   
    Course.findById(id)
        .then(course => {
            if (!course) {
                return res.status(404).json({ message: 'Course not found' });
            }
            res.json(course);
        })
        .catch(err => res.status(500).json({ message: err.message }));
});



app.put('/editcourse/:id', (req, res) => {
    const { id } = req.params;
    const { coursename,courseid, department, year,semester} = req.body;

    Course.findByIdAndUpdate(id, {
        coursename,
        courseid,
        department,
        year,
        semester,
        
    }, { new: true })
    .then(course => res.json('Course Updated Successfully'))
    .catch(err => res.status(500).json({ message: err.message }));
});




app.get('/student/:rollno', (req, res) => {
    const { rollno } = req.params;
    Student.findOne({ rollno: rollno })
        .then(student => {
            if (!student) {
                return res.status(404).json({ message: 'Student not found' });
            }
            res.json(student);
        })
        .catch(err => res.status(500).json({ message: err.message }));
});


app.get('/course', (req, res) => {
    const { department, year, semester } = req.query;
    Course.find({ department, year, semester })
        .then(courses => {
            if (courses.length === 0) {
                return res.status(404).json({ message: 'No courses found' });
            }
            res.json(courses);
        })
        .catch(err => res.status(500).json({ message: err.message }));
});


app.post('/add-results', async (req, res) => {
    const { rollno, marks } = req.body;

    try {
      
        let existingResult = await Result.findOne({ rollno });

        if (existingResult) {
        
            existingResult.marks = marks;
            await existingResult.save();
        } else {
          
            const newResult = new Result({ rollno, marks });
            await newResult.save();
        }

        res.status(200).send({ message: 'Results submitted successfully!' });
    } catch (error) {
        console.error('Error saving results:', error);
        res.status(500).send({ message: 'Failed to submit results.' });
    }
});



app.get('/result/:rollno', (req, res) => {
    const { rollno } = req.params;
    Result.findOne({ rollno })
        .then(result => {
            if (!result) {
                return res.status(404).json({ message: 'Result not found' });
            }
            res.json(result);
        })
        .catch(err => res.status(500).json({ message: err.message }));
});



app.post('/forgot-password', (req, res) => {
    const { name, email, password } = req.body;

    FormDataModel.findOne({ email, name })
        .then(user => {
            if (!user) {
                return res.json("User not found");
            }

         
            user.password = password;
            user.save()
                .then(() => res.json("Success"))
                .catch(err => res.status(500).json({ message: err.message }));
        })
        .catch(err => res.status(500).json({ message: err.message }));
});







app.listen(3001, () => {
    console.log("Server listining on http://127.0.0.1:3001");

});