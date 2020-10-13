(function () {
    "use strict";
    // instancia o modulo   
    angular
        .module('applist', []);

    angular.module('applist')
        .controller('controllerLista', ListaDetardefasController);

    ListaDetardefasController.$inject = ['$scope'];

    function ListaDetardefasController($scope) {
        var vm = this;
        $scope.listaDeTarefas = [
            { nome: 'estudar Angularjs', feito: false },
            { nome: 'Fazer uma aplicação', feito: true }
        ];
        $scope.restando = calcRestante;
        function calcRestante(params) {
            var count = 0;
            angular.forEach($scope.listaDeTarefas, tarefa => {
                if (tarefa.feito) count++;
            });
            return count;
        }
        $scope.addTarefa = adiciona;
        function adiciona(params) {
            $scope.listaDeTarefas.push({nome:$scope.textoTarefa,feito:false});
            $scope.textoTarefa='';
        }
        $scope.Arquivar = arquiva;
        function arquiva(params) {
            var listaAntiga = $scope.listaDeTarefas;
            $scope.listaDeTarefas = [];
            angular.forEach(listaAntiga, function (tarefa) {
                if (!tarefa.feito) {
                    $scope.listaDeTarefas.push(tarefa)
                };
            });
        }
    }
})();