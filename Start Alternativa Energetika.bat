@echo off
rem Opens the exam app in its own window. No internet connection is used.
start "" powershell -NoProfile -WindowStyle Hidden -ExecutionPolicy Bypass -File "%~dp0launch.ps1"
