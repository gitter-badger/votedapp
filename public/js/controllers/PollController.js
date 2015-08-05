angular.module('voted').controller("PollController", function ($scope,$routeParams,$resource) {
  var Poll = $resource('/dashboard/:id');
  Poll.get({id: $routeParams.pollid}, function(poll){
    $scope.poll = poll;
    $scope.total = 0;
    $scope.medias = []
    for (var i in poll.options[0]){
      $scope.total += poll.options[0][i].value;
    }
    console.log('poll recebida p.');
  }, function(erro){
    $scope.mensagem = {
      texto: 'Não foi possivel encontrar a enquete.'
    };
    console.log(erro);
  });
});
