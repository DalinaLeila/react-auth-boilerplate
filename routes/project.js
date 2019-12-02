const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// GET /api/projects
router.get("/", (req, res) => {
  // return all projects
  Project.find({})
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

const mongoose = require("mongoose");
// GET /api/projects/:id
router.get("/:id", (req, res) => {
  // return 1 project w/ a given id
  const projectId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(projectId)) {
    res.status(400).json({ message: "ProjectId is not valid" });
    return;
  }

  Project.findById(projectId)
    .then(project => {
      if (!project) {
        res.status(404).json({ message: "Project not found" });
      } else res.json(project);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// POST /api/projects
router.post("/", (req, res) => {
  // create 1 project

  console.log(req.body);

  Project.create({
    title: req.body.title,
    description: req.body.description
  })
    .then(project => {
      res.json(project);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// PUT /api/projects/:id
router.put("/:id", (req, res) => {
  Project.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      description: req.body.description
    },
    { new: true }
  )
    .then(project => {
      res.json(project);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// DELETE /api/projects/:id
router.delete("/:id", (req, res) => {
  Project.findByIdAndDelete(req.params.id)
    .then(deletedProject => {
      // delete associated Tasks
      res.json({ message: "ok" });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;