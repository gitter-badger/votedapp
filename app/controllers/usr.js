module.exports = function(app){
  var Poll = app.models.poll;
  var controller = {};

	controller.getPollByName = function (req,res) {
    console.log('chegou no controller do app');
		var _name = req.params.pollname;
		Poll.findOne({name : _name}).exec().then(function (poll) {
			if(!poll) throw new Error('Poll não encontrado');
			res.json(poll);
		},function (erro) {
			console.log(erro);
			res.status(404).json(erro);
		});
	};

  return controller;
}
