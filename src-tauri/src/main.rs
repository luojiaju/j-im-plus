// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
extern crate winrt_notification;
use winrt_notification::{Duration, Sound, Toast};

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn greet1(name: &str) -> String {
    // 发送win系统 通知
       // 发送 Windows 系统通知
       send_notification(name);

       // 返回通知已发送的消息
       format!("Notification sent to {}", name)
   
}

fn send_notification(name: &str) {
    Toast::new(Toast::POWERSHELL_APP_ID)
    .title("Look at this flip!")
    .text1(format!("(╯°□°）╯︵ ┻━┻ {}", name).as_str())
    .sound(Some(Sound::SMS))
    .duration(Duration::Short)
    .show()
    .expect("unable to toast");
}


fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .invoke_handler(tauri::generate_handler![greet1])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
