import { 
    AT_HOME_ACTIONTYPES,
    AT_MALL_ACTIONTYPES,
    AT_PURCHASE_ACTIONTYPES,
    AT_PEOPLE_ACTIONTYPES
} from './actionTypes';

const AT_HOME_ACTIONCREATOR = {
    type:AT_HOME_ACTIONTYPES,
    payload:{}
}

const AT_MALL_ACTIONCREATOR = {
    type:AT_MALL_ACTIONTYPES,
    payload:{}
}

const AT_PURCHASE_ACTIONCREATOR = {
    type:AT_PURCHASE_ACTIONTYPES,
    payload:{}
}

const AT_PEOPLE_ACTIONCREATOR = {
    type:AT_PEOPLE_ACTIONTYPES,
    payload:{}
}

export { AT_HOME_ACTIONCREATOR,AT_MALL_ACTIONCREATOR,AT_PURCHASE_ACTIONCREATOR,AT_PEOPLE_ACTIONCREATOR };