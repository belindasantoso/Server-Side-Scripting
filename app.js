// Source Code : Traversy Media's Youtube Channel https://www.youtube.com/watch?v=dJGoSD9ATcw&t=17s

const express = require ('express');
const path = require('path');
const app = express();
const uuid = require('uuid');

// Body Parser Middleware
app.use(express.json());


// Set static files
app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname + '/index.html'));
});


// Questions
const questions = [
    {
        id : '1',
        name : 'John Doe, ',
        email : 'johnd@gmail.com',
        subject: 'opening times ',
        number : '1234567890 ',
        message : 'Hi, are you guys open during the weekends? ',
        label: true
    },
    {
        id : '2',
        name : 'Jhohn Doe, ',
        email : 'jhohnd@gmail.com',
        subject: 'opening times ',
        number : '1111144440 ',
        message : 'Hi, are you guys open during the weekends? ',
        label: true
    },
    {
        id : '3',
        name : 'Johnnnn Doeeeeee, ',
        email : 'johnnnndoeee@gmail.com ',
        subject: 'opening times ',
        number : '11231231230',
        message : 'Hi, are you guys open during the weekends? ',
        label: true
    }
]

// Get all questions
app.get('/', (req,res) => res.json(questions));

// Create a question
app.post('/api/question',(req,res) => {
    const newQuestions = {
        id: uuid.v4(),
        name :req.body.name,
        email : req.body.email,
        subject: req.body.subject,
        number : req.body.number,
        message : req.body.message,
        label: true,
        printed: "Name: " + req.body.name  + ", Email: " + req.body.email
                + " Subject: " + req.body.subject + ". Number: " + req.body.number + ". Message: '" + req.body.message + "'"
    }
    questions.push(newQuestions)
    res.send(newQuestions);
    
});


// Get just one question
app.get('/:id', (req,res) => {
    const found = questions.find(question => question.id === req.params.id);
  
      if (found){
      res.json(found);
      return
      } 
      else {
          const feedback = {
          label: false
          } 
          res.status(400).json(feedback);
      }
  });


// Delete question
app.delete('/:id', (req,res) => {
    const found = questions.find(question => question.id === req.params.id);
    if (found){
        const index = questions.indexOf(found)
        questions.splice(index,1)
        const feedback = {
            label: true
        }
        res.send(feedback)
        return
    } 
    else {
        const feedback = {
            label: false
        }
        res.status(400).json(feedback);
  }
});


// MEMBERSHIP
// Members 
const members = [
    {
        id : '1',
        name : 'Leonar Doe',
        email : 'leonard@gmail.com',
        number : '1234567890',
        type : 'pelanggansetia',
        label: true
    },
    {
        id : '2',
        name : 'Jack Dawson ',
        email : 'jackdawson@titanic.com ',
        number : '1111144440 ',
        type : 'langganan',
        label: true
    },
    {
        id : '3',
        name : 'Di Caprio ',
        email : 'dicaprio@gmail.com ',
        number : '11231231230 ',
        type : 'langganan',
        label: true
    }
]

// Get all members
app.get('/', (req,res) => res.json(members));

// Create member
app.post('/',(req,res) => {
    const newMember = {
        id: uuid.v4(),
        name :req.body.name,
        email : req.body.email,
        number : req.body.number,
        type : req.body.type,
        printed: "Name: " + req.body.name  + ". Email: " + req.body.email
                + " Number: " + req.body.number + " Member Type: " + req.body.type,
        label: true
    }

    members.push(newMember)
    res.send(newMember);
});


// Get just one member
app.get('/member/:memberid', (req,res) => {

    const found = members.find(member => member.id === req.params.memberid);
      if (found){
      res.json(found);
      return
      } 
      else {
          const feedback = {
          label: false
          } 
          res.status(400).json(feedback);
      }
  });


// Delete a member
app.delete('/member/:memberid', (req,res) => {
    const found = members.find(member => member.id === req.params.memberid);
    if (found){
        const index = members.indexOf(found)
        members.splice(index,1)
        const feedback = {
            label: true
        }
        res.send(feedback)
        return
    } 
    else {
        const feedback = {
            label: false
        }
        res.status(400).json(feedback);
  }
});
module.exports = app;