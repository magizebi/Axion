use tauri::command;
use std::path::Path;
use crate::commands::common::FileLoader;

#[derive(Debug, serde::Serialize)]
pub struct AudioFile {
    name: String,
    path: String,
}

pub struct AudioLoader;

impl FileLoader for AudioLoader {
    type Output = AudioFile;

    fn get_filter_name() -> &'static str {
        "Audio"
    }

    fn get_extensions() -> Vec<&'static str> {
        vec!["mp3", "wav"]
    }

    fn process_file(file_path: String) -> Result<Self::Output, String> {
        let path = Path::new(&file_path);
        let file_name = path
            .file_stem()
            .and_then(|name| name.to_str())
            .ok_or("Failed to get filename".to_string())?
            .to_string();

        Ok(AudioFile {
            name: file_name,
            path: file_path,
        })
    }
}

#[command]
pub async fn load_audio(window: tauri::Window) -> Result<AudioFile, String> {
    AudioLoader::load(window)
} 