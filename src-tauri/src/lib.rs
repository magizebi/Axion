// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/

mod commands;

use commands::image::*;
use commands::audio::*;
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_dialog::init())
        .invoke_handler(tauri::generate_handler![
            load_image,
            load_audio 
        ])
        .run(tauri::generate_context!())
        .expect("tauri 앱 실행 오류");
}
