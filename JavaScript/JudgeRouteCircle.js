var judgeCircle = function(moves) {
    return moves.split("L").length == moves.split("R").length && moves.split("U").length == moves.split("D").length;
};

//192ms
//time complexity O(n) space complexity O(1)