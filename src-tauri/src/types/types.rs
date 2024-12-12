#[derive(Debug, Clone, serde::Serialize, serde::Deserialize)]
pub struct OJNData {
    pub header: OJNHeader,
    pub notes: Vec<Note>,
    pub events: Vec<Event>,
    // ... 기타 필요한 데이터
}

#[derive(Debug, Clone, serde::Serialize, serde::Deserialize)]
pub struct OJNHeader {
    pub song_id: i32,
    pub signature: [char; 4],
    // ... 기존 헤더 필드들
}

// ... Note, Event 등 다른 타입들 정의 