export const ABOUTBTN = "ABOUTBTN" ;
export const PROJECTBTN = "PROJECTBTN";
export const VISIONBTN = "VISIONBTN";

export const ABOUTPAGE = "ABOUTPAGE";
export const PROJECTPAGE = "PROJECTPAGE";
export const VISIONPAGE = "VISIONPAGE";

export const aboutBtn = (bool) => ({
    type: ABOUTBTN,
    boolean : bool
});

export const projectBtn = (bool) => ({
    type: PROJECTBTN,
    boolean : bool
});

export const visionBtn = (bool) => ({
    type: VISIONBTN,
    boolean: bool
});

export const aboutPage = (bool) => ({
    type: ABOUTPAGE,
    boolean : bool
});

export const projectPage = (bool) => ({
    type: PROJECTPAGE,
    boolean : bool
});

export const visionPage = (bool) => ({
    type: VISIONPAGE,
    boolean: bool
});
