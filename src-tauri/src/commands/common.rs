use tauri::Window;
use tauri_plugin_dialog::DialogExt;

pub trait FileLoader {
    type Output;
    
    fn get_filter_name() -> &'static str;
    fn get_extensions() -> Vec<&'static str>;
    fn process_file(file_path: String) -> Result<Self::Output, String>;

    fn load(window: Window) -> Result<Self::Output, String> {
        let file_path = window
            .dialog()
            .file()
            .add_filter(Self::get_filter_name(), &Self::get_extensions())
            .blocking_pick_file()
            .ok_or("No file selected".to_string())?
            .to_string();

        Self::process_file(file_path)
    }
} 