#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn calculate(kn: &str, eu: &str) -> String {
    let fkn = kn.parse::<f32>().unwrap();
    let feu = eu.parse::<f32>().unwrap();
    format!("{:.2}€", ((fkn / 7.5) - feu))
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![calculate])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
