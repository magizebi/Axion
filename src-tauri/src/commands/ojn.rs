// use tauri::command;
// use crate::commands::common::FileLoader;
// #[derive(Debug)]
// pub struct OJNFile {
//     song_id: i32, //[0..4]
//     signature: [char; 4], //[4..8]
//     encode_version: f32, //[8..12]
//     genre: i32, //[12..16]
//     bpm: f32, //[16..20]
//     difficulty: [i16; 4], //[20..28]
//     event_count: [i32; 3], //[28..40]
//     note_count: [i32; 3], //[40..52]
//     measure_count: [i32; 3], //[52..64]
//     package_count: [i32; 3], //[64..76]
//     old_encode_version: i16, //[76..78]
//     old_song_id: i16, //[78..80]
//     old_genre: [char; 20], //[80..100]
//     bmp_size: i32, //[100..104]
//     old_file_version: i32, //[104..108]
//     title: [char; 64], //[108..172]
//     artist: [char; 32], //[172..204]
//     noter: [char; 32], //[204..236]
//     ojm_file: [char; 32], //[236..268]
//     cover_size: i32, //[268..272]
//     time: [i32; 3], //[272..284]
//     note_offset: [i32; 3], //[284..296]
//     cover_offset: i32, //[296..300] 
// }

// pub struct OJNLoader;

// impl FileLoader for OJNLoader {
//     type Output = OJNFile;

//     fn get_filter_name() -> &'static str {
//         "ojn"
//     }

//     fn get_extensions() -> Vec<&'static str> {
//         vec!["ojn"]
//     }

//     fn process_file(file_path: String) -> Result<Self::Output, String> {
//         Ok(OJNFile)
//     }
// }

// #[command]
// pub async fn load_ojn(window: tauri::Window, audio_type: String) -> Result<OJNFile, String> {
//     OJNLoader::load(window)
// } 