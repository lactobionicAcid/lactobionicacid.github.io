hexo.extend.tag.register("githublabel", ( args ) => {
    return `
    <spam class="github_label" style="
        --label-r: ${ args[1] ?? 153 }; 
        --label-g: ${ args[2] ?? 153 }; 
        --label-b: ${ args[3] ?? 153 }; 
        --label-h: ${ args[4] ?? 0 }; 
        --label-s: ${ args[5] ?? 0 }; 
        --label-l: ${ args[6] ?? 60 };
    ">
    ${ args[0] }
    </spam>
    `;
})