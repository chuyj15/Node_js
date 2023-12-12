try {
    // 예외 발생 가능한 부분
    throw new Error('이 예외는 의도적으로 발생시켰습니다.');
    // 예외 발생하지 않는 부분
    console.log('이 부분은 실행됩니다.'); //실행되지 않음
    } catch (error) {
    // 예외 처리
    console.error('예외가 발생했습니다:', error.message); //실행됨
    //결과) 예외가 발생했습니다: 이 예외는 의도적으로 발생시켰습니다.
    } finally {
    // 항상 실행되는 부분
    console.log('finally 블록: 이 부분은 항상 실행됩니다.');
    }