export const STATUS_NONE = -1;

export const STATUS_OK = 0;

export const STATUS_WARNING = 1;

export const STATUS_INVALID = 2;


export function worstStatus(statuses){
    return Math.max(...statuses);
}

export function bestStatus(statuses){
    return Math.min(statuses);
}

export function selectIcon(status){
    switch(status) {
        case undefined:
            return "fa-spinner";
        case STATUS_WARNING:
            return "question-circle";
        case STATUS_INVALID:
            return "times-circle";
        case STATUS_NONE:
            return "";
        case STATUS_OK:
        default:
            return "check-circle";
    }
}

export function selectVariant(status) {
    switch(status) {
        case STATUS_WARNING:
            return "warning";
        case STATUS_INVALID:
            return "danger";
        case STATUS_OK:
        default:
            return "success";
    }
}

export function selectColor(status){
    switch(status) {
        case undefined:
            return "black";
        case STATUS_WARNING:
            return "#f0ad4e";
        case STATUS_INVALID:
            return "#d9534f";
        case STATUS_NONE:
            return "White";
        case STATUS_OK:
        default:
            return "#5cb85c";
    }
}
