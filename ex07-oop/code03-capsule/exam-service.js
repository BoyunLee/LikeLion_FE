let exams = [];

export const add = (exam) => {
    exams.push(exam);
}

export const getList = (page=1, size=3) => {
    let exams1 = exams
                .sort((a, b) => b.kor - a.kor)
                .slice(0, size);

    return exams1;
}

export const size = () => exams.length;


