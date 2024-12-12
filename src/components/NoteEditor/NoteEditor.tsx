import { useRef, useEffect, useState } from 'react';
import './NoteEditor.css';

interface GridConfig {
  measureHeight: number;  // 한 마디의 높이
  laneWidth: number;     // 각 레인의 너비
  gridDivision: number;  // 그리드 분할 수 (1/16 등)
  leftAreaWidth: number; // 왼쪽 추가 영역 너비
}

export function NoteEditor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gridConfig] = useState<GridConfig>({
    measureHeight: 320,
    laneWidth: 60,
    gridDivision: 16,
    leftAreaWidth: 120  // 왼쪽 2칸을 위한 공간
  });

  // 그리드 그리기
  const drawGrid = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    // 캔버스 초기화
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 배경 색상
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 왼쪽 영역 세로선
    for (let i = 0; i <= 2; i++) {
      const x = i * (gridConfig.leftAreaWidth / 2);
      ctx.beginPath();
      ctx.strokeStyle = '#333333';
      ctx.lineWidth = 1;
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }

    // 노트 레인 세로선
    for (let i = 0; i <= 7; i++) {
      const x = gridConfig.leftAreaWidth + (i * gridConfig.laneWidth);
      ctx.beginPath();
      
      // 왼쪽 빨간 경계선
      if (i === 0) {
        ctx.strokeStyle = 'rgba(255, 82, 82)'; // 부드러운 빨간색
      }
      // 오른쪽 파란 경계선
      else if (i === 7) {
        ctx.strokeStyle = 'rgba(66, 165, 245)'; // 부드러운 파란색
      }
      // 일반 세로선
      else {
        ctx.strokeStyle = '#333333';
      }
      
      ctx.lineWidth = (i === 0 || i === 7) ? 2 : 1;
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }

    // 가로선과 마디 번호
    const smallGridHeight = gridConfig.measureHeight / gridConfig.gridDivision;
    const totalMeasures = Math.floor(canvas.height / gridConfig.measureHeight);
    const rightEdgeX = gridConfig.leftAreaWidth + (7 * gridConfig.laneWidth);
    
    for (let y = 0; y < canvas.height; y += smallGridHeight) {
      ctx.beginPath();
      
      // 마디 구분선 (굵은 선)
      if (y % gridConfig.measureHeight === 0) {
        ctx.strokeStyle = 'rgba(255, 235, 59, 0.8)'; // 부드러운 노란색
        ctx.lineWidth = 2;
        
        // 마디 번호 그리기
        const currentMeasure = Math.floor(y / gridConfig.measureHeight);
        const measureNumber = totalMeasures - currentMeasure;
        
        // 마디 번호 스타일 설정
        ctx.fillStyle = 'rgba(158, 158, 158, 0.5)'; // 부드러운 회색
        const fontSize = Math.floor(gridConfig.measureHeight / 2);
        ctx.font = `italic 700 ${fontSize}px "Roboto", sans-serif`;
        
        // 마디 번호 위치 계산 및 그리기
        const numberX = rightEdgeX + gridConfig.laneWidth;
        const numberY = y + (gridConfig.measureHeight / 2) + (fontSize / 3);
        
        ctx.fillText(
          `#${String(measureNumber).padStart(3, '0')}`,
          numberX,
          numberY
        );
      } else {
        ctx.strokeStyle = '#333333';
        ctx.lineWidth = 1;
      }
      
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
  };

  // 캔버스 크기 설정
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      drawGrid();
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return (
    <div className="note-editor">
      <canvas 
        ref={canvasRef}
        className="editor-canvas"
      />
      <div className="editor-overlay">
        {/* 여기에 나중에 노트나 다른 UI 요소들이 추가될 수 있습니다 */}
      </div>
    </div>
  );
}
