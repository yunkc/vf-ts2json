@this = {
    // 这里是第一层，也叫顶层。
    this.on("Add", () => {
        // 这里是第二层
        trace("Hello, world!");
    });
}
