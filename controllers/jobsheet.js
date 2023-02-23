const db = require("../models");
const Quiz = db.quizzs;

//data quiz yang didapatkan dari input pengguna
exports.submitOne = async (req, res) => {
  const jobsheet = {
    quizId: req.body.quizId,
    answer: req.body.answer,
  };
  try {
    var quiz = await Quiz.findOne({
      where: {
        id: req.body.quizId,
      },
    });

    if (req.body.answer == quiz.key) {
      res.status(200).json({
        message: "benar",
      });
    } else {
      res.status(200)({
        message: `jawaban yang benar adalah ${quiz.key}`,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: e.message,
    });
  }
};

//data yang didapatkan dari input pengguna
exports.submitMany = async (res, req) => {
  const jobsheet = {
    quizId: req.body.quizId,
    answer: req.body.answer,
  };
  try {
    let benar = 0;
    letSoal = jobsheet.quizId.length;
    for (let i = 0; i < totalSoal; i++) {
      const quiz = await Quiz.findOne({
        limit: 1,
        where: {
          id: jobsheet.quizId[i],
        },
        order: [["id", "DESC"]],
      });
      if (quiz.key == jobsheet.answer[i]) {
        benar = benar + 1;
      }
    }
    res.status(200).json({
      message: `benar ${benar} dari ${totalSoal} soal`,
    });
  } catch (error) {
    res.status(500).json({ message: e.message });
  }
};