use std::fs::File;
use std::io::Read;
use base64::{Engine as _, engine::general_purpose::STANDARD as BASE64};
use tauri::command;
use crate::commands::common::FileLoader;

#[derive(Debug, serde::Serialize)]
pub struct ImageResponse {
    data_url: String,
    width: u32,
    height: u32,
}

pub struct ImageLoader;

impl FileLoader for ImageLoader {
    type Output = Vec<String>;

    fn get_filter_name() -> &'static str {
        "Images"
    }

    fn get_extensions() -> Vec<&'static str> {
        vec!["jpg", "jpeg", "png", "bmp", "gif"]
    }

    fn process_file(file_path: String) -> Result<Self::Output, String> {
        let mut file = File::open(&file_path).map_err(|e| e.to_string())?;
        let mut buffer = Vec::new();
        file.read_to_end(&mut buffer).map_err(|e| e.to_string())?;

        const CHUNK_SIZE: usize = 1024 * 1024;
        
        let chunks: Vec<String> = buffer
            .chunks(CHUNK_SIZE)
            .map(|chunk| BASE64.encode(chunk))
            .collect();

        Ok(chunks)
    }
}

#[command]
pub async fn load_image(window: tauri::Window) -> Result<Vec<String>, String> {
    ImageLoader::load(window)
}