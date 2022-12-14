import types from './types';
import produce from 'immer';

const INITIAL_STATE = {
    salao: {},
    servicos: [],
    agenda: [],
    colaboradores: [],
    agendamento: {
        clienteId: consts.clienteId,
        salaoId: consts.salaoId,
        servicosId: null,
        colaboradorId: null,
        data: null,
    },
    form: {
        inputFiltro: '',
        inputFiltroFoco: false,
        modalEspecialista: false,
        modalAgendamento: 0,
        agendamentoLoading: false,
    },
};

function salao(state = INITIAL_STATE, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default salao;