export const getType = (message: Methods) => {
    if (message === "log" || message === "info") {
        return "info";
    }

    if (message === "warn") {
        return "warning";
    }

    return "error";
};

export type ConsoleData = {
    data: (string | object)[];
    id: string;
    method: Methods;
}[];

type Methods =
    | "log"
    | "debug"
    | "info"
    | "warn"
    | "error"
    | "table"
    | "clear"
    | "time"
    | "timeEnd"
    | "count"
    | "assert";
